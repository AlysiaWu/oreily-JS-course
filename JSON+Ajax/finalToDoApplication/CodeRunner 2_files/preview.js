/**
 * Preview Plugin
 * by Matt Roberts
 * v0.1 (2010/05/04)
 * 
 *    
 * This plugin will add a new button to the toolbar. When clicked, the button will enact an action on the
 * currently opened file. This could be simply previewing it, translating, compiling, etc...
 *
 * Unfortunately, I can't figure out how to get this plugin to recognize ExtJS to make some nice, pretty 
 * popup windows. As a result, all this really does it...nothing except paint a button on the toolbar.
 * Otherwise, I just attach an event listener in another file.
 * 
 * - plugin name to add to the plugin list: "preview"
 * - plugin name to add to the toolbar list: "preview" 
 * 
 */
   
var EditArea_preview= {
	imagePath: "../js/edit_area/plugins/preview/images/",	
		
	/**
	 * Get called once this file is loaded (editArea still not initialized)
	 *
	 * @return nothing	 
	 */	 	 	
	init: function(){	
	}
	
	/**
	 * Returns the HTML code for a specific control string or false if this plugin doesn't have that control.
	 * A control can be a button, select list or any other HTML item to present in the EditArea user interface.
	 * Language variables such as {$lang_somekey} will also be replaced with contents from
	 * the language packs.
	 * 
	 * @param {string} ctrl_name: the name of the control to add	  
	 * @return HTML code for a specific control or false.
	 * @type string	or boolean
	 */	
	,get_control_html: function(ctrl_name){
		
		switch(ctrl_name){
			case "preview":
				// Control id, button img, command
				return  "<a id=\"a_preview_but4\" href=\"javascript:top.cr.previousScreen();\" onclick=\"top.cr.previousScreen();return false;\" onmousedown=\"return false;\" target=\"_self\" filespecific=\"no\"><img id=\"arrow_left\" src=\"" + this.imagePath + "arrow_left.png\" title=\"Action\" onmouseover=\"editArea.switchClass(this,'editAreaButtonOver');\" onmouseout=\"editArea.restoreClass(this);\" onmousedown=\"editArea.restoreAndSwitchClass(this,'editAreaButtonDown');\" class=\"editAreaButtonNormal\" height=\"16\" width=\"16\"></a>"+
				"<a id=\"a_preview_but5\" href=\"javascript:top.cr.homeScreen();\" onclick=\"top.cr.homeScreen();return false;\" onmousedown=\"return false;\" target=\"_self\" filespecific=\"no\"><img id=\"house\" src=\"" + this.imagePath + "house.png\" title=\"Action\" onmouseover=\"editArea.switchClass(this,'editAreaButtonOver');\" onmouseout=\"editArea.restoreClass(this);\" onmousedown=\"editArea.restoreAndSwitchClass(this,'editAreaButtonDown');\" class=\"editAreaButtonNormal\" height=\"16\" width=\"16\"></a>"+
				"<a id=\"a_preview_but6\" href=\"javascript:top.cr.nextScreen();\" onclick=\"top.cr.nextScreen();return false;\" onmousedown=\"return false;\" target=\"_self\" filespecific=\"no\"><img id=\"arrow_right\" src=\"" + this.imagePath + "arrow_right.png\" title=\"Action\" onmouseover=\"editArea.switchClass(this,'editAreaButtonOver');\" onmouseout=\"editArea.restoreClass(this);\" onmousedown=\"editArea.restoreAndSwitchClass(this,'editAreaButtonDown');\" class=\"editAreaButtonNormal\" height=\"16\" width=\"16\"></a>"+
				"<a id=\"a_preview_but1\" href=\"javascript:editArea.execCommand('preview_cmd1')\" onclick=\"editArea.execCommand('preview_cmd1');return false;\" onmousedown=\"return false;\" target=\"_self\" filespecific=\"no\"><img id=\"preview_but1\" src=\"" + this.imagePath + "preview.png\" title=\"Action\" onmouseover=\"editArea.switchClass(this,'editAreaButtonOver');\" onmouseout=\"editArea.restoreClass(this);\" onmousedown=\"editArea.restoreAndSwitchClass(this,'editAreaButtonDown');\" class=\"editAreaButtonNormal\" height=\"16\" width=\"75\"></a>"+
				"<a id=\"a_preview_but2\" href=\"javascript:editArea.execCommand('preview_cmd2')\" onclick=\"editArea.execCommand('preview_cmd2');return false;\" onmousedown=\"return false;\" target=\"_self\" filespecific=\"no\"><img id=\"preview_but2\" src=\"" + this.imagePath + "validate.png\" title=\"Validate\" onmouseover=\"editArea.switchClass(this,'editAreaButtonOver');\" onmouseout=\"editArea.restoreClass(this);\" onmousedown=\"editArea.restoreAndSwitchClass(this,'editAreaButtonDown');\" class=\"editAreaButtonNormal\" height=\"16\" width=\"80\"></a>"+
				"<a id=\"a_preview_but3\" href=\"javascript:editArea.execCommand('preview_cmd3')\" onclick=\"editArea.execCommand('preview_cmd3');return false;\" onmousedown=\"return false;\" target=\"_self\" filespecific=\"no\"><img id=\"preview_but3\" src=\"" + this.imagePath + "translate.png\" title=\"Translate\" onmouseover=\"editArea.switchClass(this,'editAreaButtonOver');\" onmouseout=\"editArea.restoreClass(this);\" onmousedown=\"editArea.restoreAndSwitchClass(this,'editAreaButtonDown');\" class=\"editAreaButtonNormal\" height=\"16\" width=\"85\"></a>";
				//return parent.editAreaLoader.get_button_html('preview_but', 'preview.png', 'preview_cmd', false, this.baseURL);
		}
		return false;
	}
	/**
	 * Get called once EditArea is fully loaded and initialised
	 *	 
	 * @return nothing
	 */	 	 	
	,onload: function(){ 
		
	}
	
	/**
	 * Is called each time the user touch a keyboard key.
	 *	 
	 * @param (event) e: the keydown event
	 * @return true - pass to next handler in chain, false - stop chain execution
	 * @type boolean	 
	 */
	,onkeydown: function(e){
	}
	
	/**
	 * Executes a specific command, this function handles plugin commands.
	 *
	 * @param {string} cmd: the name of the command being executed
	 * @param {unknown} param: the parameter of the command	 
	 * @return true - pass to next handler in chain, false - stop chain execution
	 * @type boolean	
	 */
	,execCommand: function(cmd, param){
		// Handle commands
		if (cmd.substring(0,11) == "preview_cmd")
		{			
			eval("parent."+editArea.settings['onPreview']+"('"+ cmd.substring(11) +"');");
			return false;
		}
		
		switch(cmd){
			case "file_open":
				this.syntax_switched(param);
				return true;
			case "change_syntax":
				this.syntax_switched(param);
				return true;
			case "syntax_switched":
				this.syntax_switched(param);
				return true;
			case "file_switch_on":
				this.syntax_switched(param);
				return true;
		}
		// Pass to next handler in chain
		return true;
	}
	, syntax_switched: function(newSyntax)
	{
		
		if (null == newSyntax || "" == newSyntax || "plaintext" == newSyntax)
		{
			newSyntax="text";
		}
		if (null != newSyntax.syntax)
		{
			newSyntax = newSyntax.syntax;
		}
		
		// HACK: manually check the drop down, to make sure we display the correct buttons.
		var s = document.getElementById("syntax_selection");
		if (newSyntax != s.value)
		{
			for(x=0; x < s.options.length; x++)
			{
				if (newSyntax == s.options[x].value )
				{
					s.options[x].selected=true;
				}
			}
		}
		
		if(typeof newSyntax == "object") // if we got this far with an object, just return
			return;

		for(x=1; x<7; x++)
		{
			document.getElementById("a_preview_but" + x).style.display = "none";
		}
		var tb = document.getElementById("toolbar_1");
   	 	children = tb.childNodes;
   	 	var sep = children[1];
   	 	sep.style.display = "none";
   	
		if ("-1" == newSyntax || "plaintext" == newSyntax || "css" == newSyntax || "js" == newSyntax || "sql" == newSyntax || "text" == newSyntax)
		{
			return true;
		}
		document.getElementById("a_preview_but1").style.display = "";
		var img = document.getElementById("preview_but1");
		sep.style.display = "";
		if ("c" == newSyntax ||	"cpp" == newSyntax || "java" == newSyntax)
		{
			img.title = "Compile";
			img.src = this.imagePath + "compile.png";
			img.width = "80";
		}
		if ("html" == newSyntax || "php" == newSyntax || "vbscript" == newSyntax || "json" == newSyntax || "ruby" == newSyntax)
		{
			img.title = "Preview";
			img.src = this.imagePath + "preview.png";
			img.width="75";
		}
		if ("mdx" == newSyntax)
		{
			img.title = "Run Query";
			img.src = this.imagePath + "query.png";
			img.width="95";
		}
		if ("perl" == newSyntax  || "python" == newSyntax)
		{
			img.title = "Check Syntax";
			img.src = this.imagePath + "syntax.png";
			img.width="120";
		}
		if ("xml" == newSyntax)
		{
			img.title = "Check Syntax";
			img.src = this.imagePath + "syntax.png";
			img.width = "120";
			document.getElementById("a_preview_but2").style.display = "";
			//document.getElementById("preview_but2").title = "Validate";
			//document.getElementById("preview_but2").src = this.imagePath + "validate.png";
			document.getElementById("a_preview_but3").style.display = "";
			//document.getElementById("preview_but3").title = "Translate";
			//document.getElementById("preview_but3").src = this.imagePath + "translate.png";
			

		}
		
		
	}
	
	
};

// Adds the plugin class to the list of available EditArea plugins
editArea.add_plugin("preview", EditArea_preview);

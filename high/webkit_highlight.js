// set up the global code comrade library namespace
$cc={};

// some helper constants
$cc.LEFT = '<span style="background-color: yellow">';
$cc.RIGHT = '</span>';
$cc.LEFT_RIGHT_COUNT = $cc.LEFT.length + $cc.RIGHT.length;

// global variables
$cc.g_highlight = -1; 

// methods
$cc.highlight_term = function(node, term)
{
    var inner_html = node.innerHTML;
    var index = inner_html.indexOf(term);
    var count = 0;
    
    while (index != -1)
    {
        count += 1;
        var inner_html_left = inner_html.substring(0, index);
        var inner_html_middle = inner_html.substring(index, index + term.length);
        var inner_html_right = inner_html.substring(index + term.length);
        inner_html = inner_html_left + $cc.LEFT + inner_html_middle + $cc.RIGHT + inner_html_right;
        index = inner_html.indexOf(term, index + term.length + 1 + $cc.LEFT_RIGHT_COUNT);
    }
    
    node.innerHTML = inner_html;
    
    return count;
}

// $cc.highlight_term = function(node, term)
// {
//     if (node.nodeType == Node.ELEMENT_NODE && node.childNodes && node.tagName != "script" && node.tagName != "style")
//     {
//         var children = node.childNodes;
//         var children_length = children.length;
//     
//         for (var i = 0; i < children_length; i++)
//         {
//             $cc.highlight_term(children[i], term);
//         }
//     }
// }

$cc.highlight = function(term)
{
    if ($cc.g_highlight != -1)
    {
        $cc.unhighlight();
    }
    
    return $cc.highlight_term(document.body, term);
}

$cc.unhighlight = function()
{
    if ($cc.g_highlight != -1)
    {
        var elements = document.body.getElementsByClassName("cc_high");
        
        for (var i = 0; i < elements; i++)
        {
            elements[i].
        }
        
        $cc.g_highlight = -1;
    }
}

$cc.init = function()
{
}

$cc.init();


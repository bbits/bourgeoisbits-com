function do_it()
{
    window.find("world");
}

// // set up the global code comrade library namespace
// $cc={};
// 
// // some helpers
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
//         
//         // var inner_text = node.innerText;
//         var inner_html = node.innerHtml;
//         var index = inner_html.indexOf(term);
//         if (index != -1)
//         {
//             inner_html =
//         }
//     }
// }
// 
// // console.log('yo');
// // $cc.highlight_term(document.body, "world");
// // console.log('noo');

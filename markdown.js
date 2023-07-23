import React from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0';
  
marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  },
});


const renderer = new marked.Renderer();
renderer.link = function (href, title,text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
  };

const defaultContent = `# Heading 1

## Sub Heading 2

[sankalp_photo](https://drive.google.com/file/d/17fVqZSadDLKjEZf4DOPjhkm6uxNdyn2X/view?usp=drivesdk)

\`const example = 'inline code';\`

\`\`\`
// This is a code block
function add(a, b) {
  return a + b;
}
\`\`\`


- List Item 1
- List Item 2
- List Item 3

> This is a blockquote

![Image](https://via.placeholder.com/150)

**Bolded text**`;


const Editor = ({ content, handleTextareaChange }) => <textarea id="editor" value={content} onChange={handleTextareaChange} />

const Previewer = ({ content }) => <div id="preview" dangerouslySetInnerHTML={{
     __html: marked(content, {renderer: renderer})
  }} />
 
 const App = () => {
   const [content, setContent] = React.useState(defaultContent)
   const handleTextareaChange = (event) => {
     setContent(event.target.value)
   }
   return (
   <div className="main">
       <Editor content={content} handleTextareaChange={handleTextareaChange} />
       <Previewer content={content}/>
     </div>
 
   )
 }
 
ReactDOM.render(<App />,document.querySelector("#app"))
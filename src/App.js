import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
    const [markdown, setMarkdown] = useState(
        `> Here is quote by someone famos
##### Hello world
I'm baby succulents drinking vinegar **fanny pack**, lumber before they sold out iceland cronut meh letterpress raclette banh mi tumblr. Schlitz *succulents affogato street art narwhal 8-bit yr lo-fi ethical.* 
- First
- Second
- Third
1. First
2. Second
3. Third


[google](https://www.google.com)
    
    
    
    `
    );
    return (
        <main>
            <section className="markdown">
                <textarea
                    className="input"
                    value={markdown}
                    onChange={(e) => {
                        setMarkdown(e.target.value);
                    }}
                ></textarea>
                <article className="result">
                    {<ReactMarkdown>{markdown}</ReactMarkdown>}
                </article>
            </section>
        </main>
    );
}

export default App;

import React from "react";
import '../../css/pages/components/ButtonCitHub.css';

function GitHubButton(props) {
    return (
      <div className="bot_btn">
        <a
          href={props.href}
          className="bot_git_btn"
          style={{
            backgroundColor: props.backgroundColor,
            boxShadow: props.shadow,
          }}
          target="_blank"
        >
          ⭐ Star Me on Github
        </a>
      </div>
    );
  }
  
  export default GitHubButton;
  
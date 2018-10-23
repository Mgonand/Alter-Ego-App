import React, { Component } from "react";
import { Link } from "react-router-dom";


class home extends Component {
  
  render() {
    return (
      <div className="main gradient">
      <div className="icon">
      
<svg width="66px" height="69px" viewBox="0 0 66 69" >
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Pantalla-1" transform="translate(-155.000000, -125.000000)">
            <g id="Logo" transform="translate(155.000000, 125.000000)">
                <g>
                    <rect id="Rectangle" fill="#D8D8D8" fill-rule="nonzero" opacity="0.151320685" x="0" y="0" width="66" height="69"></rect>
                    <polygon id="Rectangle" fill="#FFFFFF" fill-rule="nonzero" points="15.3786408 14.1869159 25.6414907 19.3457944 25.6414907 50.2990654 15.3786408 55.4579439"></polygon>
                    <polygon id="Rectangle-Copy-5" fill="#FFFFFF" fill-rule="nonzero" points="28.1941748 10.317757 38.4466019 16.5245327 38.4466019 53.7651869 28.1941748 59.9719626"></polygon>
                    <polygon id="Rectangle-Copy-6" fill="#FFFFFF" fill-rule="nonzero" points="41.0097087 5.1588785 51.2621359 12.5747664 51.2621359 57.0700935 41.0097087 64.4859813"></polygon>
                </g>
            </g>
        </g>
    </g>
</svg></div>
      <h1 className="AlterEgo">AlterEgo</h1>
        <Link to="/signup">
          <button className="Rectangle">
            <span className="Regstrate">Regístrate</span>
          </button>
        </Link>
        <br />
        <Link to="/signup">
          <button className="Rectangle">
            <span className="Mi-cuenta">Mi cuenta</span>
          </button>
        </Link>
      </div>
    );
  }
}

export default home;

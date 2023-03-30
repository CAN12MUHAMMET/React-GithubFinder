import React, { Component } from "react";

class User extends Component {
render() {
const { login, company, bio, blog, html_url, followers, following } =
this.props.user;
return (
<div>
<div className="card mb-3">
<div className="row g-0">
<div className="col-md-3">
<img
             className="img-fluid rounded-circle "
             src={this.props.user.avatar_url}
             alt={login}
           />
</div>
<div className="col-md-9">
<div className="card-body">
<div>
<h3 className="card-title">{login}</h3>
<hr />
</div>
<div className="card-group">
<div className="card-group-item">
<h5>
<i className="bi bi-buildings-fill mx-2"></i> Company:{" "}
{company}
</h5>
<h5>
                  <i className="bi bi-person-fill mx-2"></i> Bio: {bio}
                </h5>

                <h5>
                  <i className="bi bi-person-fill mx-2"></i> Blog:{" "}
                  {blog ? (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={blog}
                      className="text-primary"
                    >
                      <i className="bi bi-linkedin mx-2"></i>linkedin
                    </a>
                  ) : (
                    "N/A"
                  )}
                </h5>

                <h5>
                  <i className="bi bi-person-fill mx-2"></i> Github:{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={html_url}
                    className="text-dark"
                  >
                    <i className="bi bi-github"></i>
                  </a>{" "}
                </h5>
                <h5>
                  <i className="bi bi-person-fill mx-2"></i> Followers:{" "}
                  {followers}
                </h5>
                <h5>
                  <i className="bi bi-person-fill mx-2"></i> Following:{" "}
                  {following}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

  }
}

export default User;

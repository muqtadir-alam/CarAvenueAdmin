import React from "react";
import { Link } from "react-router-dom";
import SellTypeAdd from "./SellTypeAdd";
import Constant from "../../Constant";

class SellTypeAddTab extends React.Component {
  state = {};

  componentDidMount() {
    if (
      this.props.match.params.SellTypeAdd_id !== undefined &&
      this.props.match.params.SellTypeAdd_id !== null &&
      this.props.match.params.SellTypeAdd_id !== 0 &&
      this.props.match.params.SellTypeAdd_id !== ""
    ) {
      this.setState({SellTypeAdd_id:this.props.match.params.SellTypeAdd_id});
    }
    this.getLanguageList();
    console.log(this.state.SellTypeAdd_id)
  }
  getLanguageList = () => {
    var language_data = Constant.getLanguageList();
    this.setState({
      language_data: language_data,
      language_id: language_data[0].id,
      isLoading: false,
    });
  };
  handleLanguage = (language_id) => {
    this.setState({ language_id: language_id });
  };
  render() {
    return (
      <div className="main-body">
        <div className="page-wrapper">
          <div className="page-header">
            <div className="row align-items-end">
              <div className="col-lg-8">
                <div className="page-header-title">
                  <div className="d-inline">
                    <h4>
                      {this.props.match.params.SellTypeAdd_id ? "Edit" : "Add"}{" "}
                      Sell Type
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="page-header-breadcrumb">
                  <ul className="breadcrumb-title">
                    <li className="breadcrumb-item">
                      <Link to="/">
                        <i className="feather icon-home"></i>{" "}
                      </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/sell-type">Sell Type</Link>
                    </li>
                    <li className="breadcrumb-item active">
                      {this.props.match.params.SellTypeAdd_id ? "Edit" : "Add"}{" "}
                      Sell Type
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="page-body">
            <div className="row">
              <div className="col-sm-12">
                <div className="card card-border-default">
                  <div className="card-block">
                    <ul className="nav nav-tabs  tabs" role="tablist">
                      {this.state.language_data !== undefined &&
                      this.state.language_data !== []
                        ? this.state.language_data.map((language) => (
                            <li
                              className="nav-item"
                              key={language.id}
                              onClick={this.handleLanguage.bind(
                                this,
                                language.id
                              )}
                            >
                              <a
                                className={
                                  this.state.language_id === language.id
                                    ? "nav-link active"
                                    : "nav-link"
                                }
                                id={"language_" + language.id}
                                data-toggle="tab"
                                href={"#tyre_Role_" + language.id}
                                role="tab"
                                aria-controls={"tyre_Role_" + language.id}
                                aria-selected="true"
                              >
                                {language.name}{" "}
                              </a>
                            </li>
                          ))
                        : ""}
                    </ul>

                    <div className="tab-content tabs">
                      <div
                        className="tab-pane  active"
                        id={"tyre_Role_" + this.state.language_id}
                        role="tabpanel"
                        aria-labelledby=""
                      >
                        {this.state.SellTypeAdd_id !== undefined &&
                        this.state.SellTypeAdd_id !== null &&
                        this.state.SellTypeAdd_id !== 0 &&
                        this.state.SellTypeAdd_id !== "" ? (
                          <SellTypeAdd
                            language_id={this.state.language_id}
                            goBack={this.props.history.goBack}
                            SellTypeAdd_id={this.props.match.params.SellTypeAdd_id}
                          /> 
                        ) : (
                          <SellTypeAdd
                            language_id={this.state.language_id}
                            goBack={this.props.history.goBack}
                          />
                        )}
                      </div>
                    </div>
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

export default SellTypeAddTab;

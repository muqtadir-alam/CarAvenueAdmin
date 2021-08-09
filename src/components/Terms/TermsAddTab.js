import React from "react";
import { Link } from "react-router-dom";
import TermsAdd from "./TermsAdd";
import Constant from "../../Constant";
import { connect } from "react-redux";
import PropTypes from "prop-types";


class TermsAddTab extends React.Component {
  state = {
    language_id:"01b07a77-11a3-4f7a-bff1-f3d4a71e12f5"
   
  };
  componentDidMount(){
  }
  componentWillReceiveProps(nextprops){
    this.setState({
      language_data:nextprops.home.languageList
    })

  }

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
                    <h4>Terms & conditions</h4>
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
                    <li className="breadcrumb-item active">Terms & conditions</li>
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
                              {/* {console.log(language)} */}
                              <div
                                className={
                                  this.state.language_id === language.id? "nav-link active" : "nav-link"
                                }
                                id={"language_" + language.id}
                                data-toggle="tab"
                                href={"#terms_conditions_" + language.id}
                                role="tab"
                                //aria-controls={"terms_conditions_" + language.language_id}
                                //aria-selected="true"
                              >
                                {language.name} -{" "}
                                {language.languageCode}{" "}
                              </div>
                            </li>
                          ))
                        : ""}
                    </ul>
                    <br/>
                    <div className="tab-content tabs">
                      <div
                        className="tab-pane  active"
                        id={"terms_conditions_" + this.state.language_id}
                        role="tabpanel"
                        aria-labelledby=""
                      >
                        {console.log(this.state.language_id)}
                       
                        {this.state.language_id !== undefined &&
                        this.state.language_id !== null &&
                        this.state.language_id !== 0 &&
                        this.state.language_id !== "" ? (
                          <TermsAdd
                            language_id={this.state.language_id}
                            goBack={this.props.history.goBack}
                            
                          />
                        ) :console.log("no")}
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

TermsAddTab.propsTypes = {
  home: PropTypes.object.isRequired,

};

var mapStateToProps = (state) => ({
  home: state.home,
});

export default connect(mapStateToProps, {  })(TermsAddTab);
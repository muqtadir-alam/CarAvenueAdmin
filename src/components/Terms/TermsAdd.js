import React from "react";
import { Link } from "react-router-dom";
import ReactQuill,{Quill} from "react-quill";
import { addTerms,getTerms } from "../../actions/homeAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";


class TermsAdd extends React.Component {
  state = {
    terms: [],
    description: " "
  };
  
  handleChange = (content, delta, source, editor) => {
    this.setState({
      description:content
    })
    console.log(content, delta, source, editor)
  };

  
  componentDidMount() {
    //console.log(this.props.language_id)
    const data={
      LanguageId:this.props.language_id
    }
    this.props.getTerms(data)
  }


  componentWillReceiveProps(nextprops){
    // this.setState({
    //   description:etEditorContents(nextprops.home.terms)
    // })
    console.log(nextprops.home.terms)
    this.setState({
      description:nextprops.home.terms
    })
  }

  onSave = () => {
     var that = this;
     var data = {
       LanguageId: that.props.language_id,
       data:that.state.description,
    };
    this.props.addTerms(data)
  };

  componentDidUpdate(prevProps) {
    if (prevProps.language_id !== this.props.language_id) {
      this.setState({
        language_id: this.props.language_id
      });
     const data={
        LanguageId:this.props.language_id
      }
      this.props.getTerms(data)
    } 
  }
  
render() {
  return (

    <div className="row">
      <div className="col-12 grid-margin">
        {
          this.state.isloading ?
            ""
            :
            <div className="">
              <div className="">
                
                <ReactQuill
                  // value={this.state.description}
                  onChange={this.handleChange.bind(this)}
                  style={{ height: "150px" }}
                  defaultValue={this.state.description}
                />
                <br />
                <br />{" "}
                <div className="row float-right p-3">
                  {
                    this.state.isSaving
                      ?
                      <button className="btn btn-info mr-2" disabled>Saving...!</button>
                      :
                      <button onClick={this.onSave} className="btn btn-info mr-2">
                        Save
              </button>
                  }

                  <Link to={"/terms"} className="btn btn-outline-dark">
                    Cancel
              </Link>
                </div>
              </div>
            </div>
        }</div>
    </div>
  );
}
}


TermsAdd.propsTypes = {
  home: PropTypes.object.isRequired,
  getTerms:PropTypes.func.isRequired

};

var mapStateToProps = (state) => ({
  home: state.home,
});

export default connect(mapStateToProps, { addTerms,getTerms })(TermsAdd);

import React from "react";
import './index.css'
import icon_search_Shuttle_Grey from '../../resources/icons/icon_search_Shuttle_Grey.svg';
import icon_close_Shuttle_Grey from '../../resources/icons/icon_close_Shuttle_Grey.svg';
import icon_calendar_Shuttle_Grey from '../../resources/icons/icon_calendar_Shuttle_Grey.svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';



class HeaderSearch extends React.Component {
    state = {
      value: '',
    }
  
    handleChange = (e) => {
      this.setState({
        value: e.target.value,
      });
    }
  
    handleSubmit = () => {
      const { value } = this.state;
  
      // do ajax request or something in order
      // to submit and redirect to a different page
      // containing search results
    }
  
    render() {
      return (
        <ul className="token-input">
          <li class="token">
            <input
              name="p"
              type="password"
              autocomplete="new-password"
              value={this.state.value}
              data-open="false"
              className="form-control"
              placeholder="Search"
            />
          </li>
        </ul>
      );
    }
  }

export default HeaderSearch;
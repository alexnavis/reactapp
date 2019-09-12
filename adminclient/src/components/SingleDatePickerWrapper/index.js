import React, { Component, PropTypes, } from 'react';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';
import omit from 'lodash/omit';
import 'react-dates/initialize';
import { getRenderedComponent, } from '../AppLayoutMap';

import { SingleDatePicker, SingleDatePickerShape } from 'react-dates';

const propTypes = {
  // example props for the demo
  autoFocus: PropTypes.bool,
  initialDate: momentPropTypes.momentObj,
};

const defaultProps = {
  // example props for the demo
  autoFocus: false,
  initialDate: null,

  // input related props
  id: 'date',
  placeholder: 'Date',
  disabled: false,
  required: false,
  screenReaderInputMessage: '',
  showClearDate: false,
  showDefaultInputIcon: false,
  customInputIcon: null,
  block: false,
  small: false,
  regular: false,
  verticalSpacing: undefined,
  keepFocusOnInput: false,

  // calendar presentation and interaction related props
  renderMonth: null,
  orientation: 'horizontal',
  anchorDirection: 'left',
  horizontalMargin: 0,
  withPortal: false,
  withFullScreenPortal: false,
  initialVisibleMonth: null,
  numberOfMonths: 2,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDate: false,
  isRTL: false,

  // navigation related props
  navPrev: null,
  navNext: null,
  onPrevMonthClick() {},
  onNextMonthClick() {},
  onClose() {},

  // day presentation and interaction related props
  renderCalendarDay: undefined,
  renderDayContents: null,
  enableOutsideDays: false,
  isDayBlocked: () => false,
  isOutsideRange() {},
  isDayHighlighted: () => {},

  // internationalization props
  displayFormat: () => moment.localeData().longDateFormat('L'),
  monthFormat: 'MMMM YYYY',
  // phrases: SingleDatePickerPhrases,
};

class SingleDatePickerWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: props.autoFocus,
      date: props.initialDate,
    };
    
    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDateChange(date) {
    this.setState({ date }, () => {
      if (this.props.customOnChange) {
        this.props.customOnChange({ date });
      } 
    });
  }

  onFocusChange({ focused }) {
    this.setState({ focused });
  }

  render() {
    const { focused, date } = this.state;

    // autoFocus and initialDate are helper props for the example wrapper but are not
    // props on the SingleDatePicker itself and thus, have to be omitted.
    const props = omit(this.props, [
      'autoFocus',
      'initialDate',
    ]);

    return (
      <div className={`${(this.state.focused) ? '__ra_date_picker_active' : ''}`}>
        <SingleDatePicker
          {...props}
          id="date_input"
          date={date}
          focused={focused}
          onDateChange={this.onDateChange}
          onFocusChange={this.onFocusChange}
        />
      </div>
    );
  }
}

SingleDatePickerWrapper.propTypes = propTypes;
SingleDatePickerWrapper.defaultProps = defaultProps;

export default SingleDatePickerWrapper;
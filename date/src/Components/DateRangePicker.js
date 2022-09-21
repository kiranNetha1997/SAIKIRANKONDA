import React, { useState } from 'react';
import { DateRangePicker } from "react-date-range"

import { add, addDays, format, isWeekend } from "date-fns"
function RangePicker() {
    const extraDot = null;
    const [state, setState] = useState({
        selection1: {
            startDate: addDays(new Date(), 7),
            endDate: new Date(),
            key: "selection1"
        },
        selection2: {
            startDate: addDays(new Date(), 1),
            endDate: addDays(new Date(), 10),
            key: "selection2"
        }
    });
    const customDayContent = (day) => {
        extraDot = null;
        if (isWeekend(day)) {
            extraDot = (
                <div>
                    style = {{
                        "height": "5px",
                        "width ": "5px",
                        "borderRadius": "100%",
                        "background": "orange",
                        "position": "absolute",
                        "top": 2,
                        "right": 2,
                    }}
                </div>
            )
        }
    }
    return (
        <div>
            <div>
                {extraDot}
                {/* <span>{format(Date(), "d")}</span> */}

            </div>
            <DateRangePicker
                onChange={item => setState({ ...state, ...item })}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={3}
                ranges={[state.selection1, state.selection2]}
                direction="horizontal"
                // dayContentRenderer={customDayContent}
                ariaLabels={{
                    dateInput: {
                        selection1: { startDate: "start date input of selction 1", endDate: "end date input of selction 1" },
                        selection2: { startDate: "start date input of selction 2", endDate: "end date input of selction 2" }
                    },
                    monthPicker: "month picker",
                    yearPicker: "year picker",
                    prevButton: "previous month button",
                    nextButton: "next month button",
                }}
            />;

        </div>
    )
}

export default RangePicker;
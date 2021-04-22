import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Dimensions,
  ToastAndroid,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import moment from "moment";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

import DropDownPicker from "react-native-dropdown-picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNPickerSelect from "react-native-picker-select";

import FontAwesome from "react-native-vector-icons/FontAwesome";

import { getAllTags } from "../../redux/actions/tagsScreen/getAllTagsAction";
import { adminAnalyticsData } from "../../redux/actions/admin/adminAnalyticsDataAction";
import { adminAnalyticsFind } from "../../redux/actions/admin/adminAnalyticsFindAction";

import LineGraph from "./nativeCharts/LineGraph";
import BarGraph from "./nativeCharts/BarGraph";
import PieGraph from "./nativeCharts/PieGraph";

const AdminAnalytics = ({
  adminAnalyticsData,
  analyticsData,
  analyticsFind,
  getAllTags,
  allTags,
}) => {
  // console.log(allTags.tags);
  // console.log(analyticsData);

  const dispatch = useDispatch();

  const [tagsMenu, setTagsMenu] = useState([]);

  const [graph, setGraph] = useState("Graph");
  const [data, setData] = useState("Data");
  const [duration, setDuration] = useState("Duration");
  const [tags, setTags] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [state, setState] = useState("");

  const [isFromDatePickerVisible, setFromDatePickerVisibility] = useState(
    false
  );
  const [isToDatePickerVisible, setToDatePickerVisibility] = useState(false);

  const showFromDatePicker = () => {
    setFromDatePickerVisibility(true);
  };
  const hideFromDatePicker = () => {
    setFromDatePickerVisibility(false);
  };
  const handleFromConfirm = (date) => {
    console.log("From Date", date);
    setStartDate(date);
    hideFromDatePicker();
  };

  const showToDatePicker = () => {
    setToDatePickerVisibility(true);
  };
  const hideToDatePicker = () => {
    setToDatePickerVisibility(false);
  };
  const handleToConfirm = (date) => {
    console.log("To Date", date);
    setEndDate(date);
    hideToDatePicker();
  };

  useEffect(() => {
    adminAnalyticsData();
    getAllTags();
  }, []);

  for (var i = 0; i < allTags.tags.length; i++) {
    tagsMenu[i] = {
      label: allTags.tags[i].tags,
      value: allTags.tags[i].tags,
    };
  }

  if (Object.keys(analyticsData.adminAnalyticsData).length == 0) {
    return <ActivityIndicator color="black" style={{ margin: 15 }} />;
  }

  //
  const submitHandler = () => {
    if (data == "Questions") {
      //daily
      if (graph == "Bar") {
        if (duration == "Daily") {
          setState("quesbardaily");
          setGraph("Graph");
          setData("Data");
          setDuration("Duration");
        } else if (startDate) {
          const val = {
            input: "Questions",
            start: startDate.toString(),
            end: endDate.toString(),
          };
          dispatch(adminAnalyticsFind(val));
          setState("quesbardate");
          setGraph("Graph");
          setData("Data");
          setStartDate("");
          setEndDate("");
        }
      }
      if (graph == "Line") {
        if (duration == "Daily") {
          setState("queslinedaily");
          setGraph("Graph");
          setData("Data");
          setDuration("Duration");
        } else if (startDate) {
          const val = {
            input: "Questions",
            start: startDate.toString(),
            end: endDate.toString(),
          };
          dispatch(adminAnalyticsFind(val));
          setState("queslinedate");
          setGraph("Graph");
          setData("Data");
          setStartDate("");
          setEndDate("");
        }
      }
      if (graph == "Pie") {
        if (duration == "Daily") {
          setState("quespiedaily");
          setGraph("Graph");
          setData("Data");
          setDuration("Duration");
        } else if (startDate) {
          const val = {
            input: "Questions",
            start: startDate.toString(),
            end: endDate.toString(),
          };
          dispatch(adminAnalyticsFind(val));
          setState("quespiedate");
          setGraph("Graph");
          setData("Data");
          setStartDate("");
          setEndDate("");
        }
      }

      //monthly
      if (graph == "Bar") {
        if (duration == "Monthly") {
          setState("quesbarmonthly");
          setGraph("Graph");
          setData("Data");
          setDuration("Duration");
        }
      }
      if (graph == "Line") {
        if (duration == "Monthly") {
          setState("queslinemonthly");
          setGraph("Graph");
          setData("Data");
          setDuration("Duration");
        }
      }
      if (graph == "Pie") {
        if (duration == "Monthly") {
          setState("quespiemonthly");
          setGraph("Graph");
          setData("Data");
          setDuration("Duration");
        }
      }

      //yearly
      if (graph == "Bar") {
        if (duration == "Yearly") {
          setState("quesbaryearly");
          setGraph("Graph");
          setData("Data");
          setDuration("Duration");
        }
      }
      if (graph == "Line") {
        if (duration == "Yearly") {
          setState("queslineyearly");
          setGraph("Graph");
          setData("Data");
          setDuration("Duration");
        }
      }
      if (graph == "Pie") {
        if (duration == "Yearly") {
          setState("quespieyearly");
          setGraph("Graph");
          setData("Data");
          setDuration("Duration");
        }
      }
    } else if (data == "Answers") {
      //daily
      if (graph == "Bar") {
        if (duration == "Daily") {
          setState("ansbardaily");
          setGraph("Graph");
          setData("Data");
          setDuration("Duration");
        } else if (startDate) {
          const val = {
            input: "Answers",
            start: startDate.toString(),
            end: endDate.toString(),
          };
          dispatch(adminAnalyticsFind(val));
          setState("ansbardate");
          setGraph("Graph");
          setData("Data");
          setStartDate("");
          setEndDate("");
        }
      }
      if (graph == "Line") {
        if (duration == "Daily") {
          setState("anslinedaily");
          setGraph("Graph");
          setData("Data");
          setDuration("Duration");
        } else if (startDate) {
          const val = {
            input: "Answers",
            start: startDate.toString(),
            end: endDate.toString(),
          };
          dispatch(adminAnalyticsFind(val));
          setState("anslinedate");
          setGraph("Graph");
          setData("Data");
          setStartDate("");
          setEndDate("");
        }
      }
      if (graph == "Pie") {
        if (duration == "Daily") {
          setState("anspiedaily");
          setGraph("Graph");
          setData("Data");
          setDuration("Duration");
        } else if (startDate) {
          const val = {
            input: "Answers",
            start: startDate.toString(),
            end: endDate.toString(),
          };
          dispatch(adminAnalyticsFind(val));
          setState("anspiedate");
          setGraph("Graph");
          setData("Data");
          setStartDate("");
          setEndDate("");
        }
      }
      //monthly
      if (graph == "Bar") {
        if (duration == "Monthly") {
          setState("ansbarmonthly");
          setGraph("Graph");
          setData("Data");
          setDuration("Duration");
        }
      }
      if (graph == "Line") {
        if (duration == "Monthly") {
          setState("anslinemonthly");
          setGraph("Graph");
          setData("Data");
          setDuration("Duration");
        }
      }
      if (graph == "Pie") {
        if (duration == "Monthly") {
          setState("anspiemonthly");
          setGraph("Graph");
          setData("Data");
          setDuration("Duration");
        }
      }
      //yearly
      if (graph == "Bar") {
        if (duration == "Yearly") {
          setState("ansbaryearly");
          setGraph("Graph");
          setData("Data");
          setDuration("Duration");
        }
      }
      if (graph == "Line") {
        if (duration == "Yearly") {
          setState("anslineyearly");
          setGraph("Graph");
          setData("Data");
          setDuration("Duration");
        }
      }
      if (graph == "Pie") {
        if (duration == "Yearly") {
          setState("anspieyearly");
          setGraph("Graph");
          setData("Data");
          setDuration("Duration");
        }
      }
    }

    //tags
    if (graph === "Bar" && tags.length > 0) {
      if (data === "Number of Subscribers in tags") {
        const val = {
          input: tags.join(" "),
          parameter: "usercount",
        };
        dispatch(adminAnalyticsFind(val));
        setState("tagbaruser");
        setGraph("Graph");
        setData("Data");
        setTags([]);
      } else if (data === "Number of Questions in tags") {
        const val = {
          input: tags.join(" "),
          parameter: "questioncount",
        };
        dispatch(adminAnalyticsFind(val));
        setState("tagbarques");
        setGraph("Graph");
        setData("Data");
        setTags([]);
      }
    }

    if (graph === "Line" && tags.length > 0) {
      if (data === "Number of Subscribers in tags") {
        const val = {
          input: tags.join(" "),
          parameter: "usercount",
        };
        dispatch(adminAnalyticsFind(val));
        setState("taglineuser");
        setGraph("Graph");
        setData("Data");
        setTags([]);
      } else if (data === "Number of Questions in tags") {
        const val = {
          input: tags.join(" "),
          parameter: "questioncount",
        };
        dispatch(adminAnalyticsFind(val));
        setState("taglineques");
        setGraph("Graph");
        setData("Data");
        setTags([]);
      }
    }
    if (graph === "Pie" && tags.length > 0) {
      if (data === "Number of Subscribers in tags") {
        const val = {
          input: tags.join(" "),
          parameter: "usercount",
        };
        dispatch(adminAnalyticsFind(val));
        setState("tagpieuser");
        setGraph("Graph");
        setData("Data");
        setTags([]);
      } else if (data === "Number of Questions in tags") {
        const val = {
          input: tags.join(" "),
          parameter: "questioncount",
        };
        dispatch(adminAnalyticsFind(val));
        setState("tagpieques");
        setGraph("Graph");
        setData("Data");
        setTags([]);
      }
    }
  };
  //

  return (
    <ScrollView>
      <View
        style={{ minHeight: Dimensions.get("window").height - 100, margin: 10 }}
      >
        {/* Select Graph Picker */}
        <DropDownPicker
          items={[
            { label: "Graph", value: "Graph", disabled: true },
            { label: "Bar", value: "Bar" },
            { label: "Line", value: "Line" },
            { label: "Pie", value: "Pie" },
          ]}
          // placeholder="Select Graph"
          defaultValue={graph}
          dropDownMaxHeight={160}
          containerStyle={{
            height: 40,
            marginBottom: 10,
          }}
          style={{ backgroundColor: "#fafafa" }}
          itemStyle={{
            justifyContent: "flex-start",
          }}
          dropDownStyle={{ backgroundColor: "#fafafa" }}
          onChangeItem={(item) => {
            setGraph(item.value);
          }}
        />

        {/* Select Data Picker */}
        <DropDownPicker
          items={[
            { label: "Data", value: "Data", disabled: true },
            { label: "Questions", value: "Questions" },
            { label: "Answers", value: "Answers" },
            {
              label: "Number of Questions in tags",
              value: "Number of Questions in tags",
            },
            {
              label: "Number of Subscribers in tags",
              value: "Number of Subscribers in tags",
            },
          ]}
          // placeholder="Select Data"
          defaultValue={data}
          dropDownMaxHeight={200}
          containerStyle={{
            height: 40,
            marginBottom: 10,
          }}
          style={{ backgroundColor: "#fafafa" }}
          itemStyle={{
            justifyContent: "flex-start",
          }}
          dropDownStyle={{ backgroundColor: "#fafafa" }}
          onChangeItem={(item) => {
            setData(item.value);
          }}
        />

        {/* Select Duration Picker */}
        <DropDownPicker
          items={[
            { label: "Duration", value: "Duration", disabled: true },
            { label: "Daily", value: "Daily" },
            { label: "Monthly", value: "Monthly" },
            { label: "Yearly", value: "Yearly" },
          ]}
          // placeholder="Select Duration"
          defaultValue={duration}
          dropDownMaxHeight={160}
          containerStyle={{
            height: 40,
            marginBottom: 10,
          }}
          style={{ backgroundColor: "#fafafa" }}
          itemStyle={{
            justifyContent: "flex-start",
          }}
          dropDownStyle={{ backgroundColor: "#fafafa" }}
          onChangeItem={(item) => {
            setDuration(item.value);
          }}
        />

        {/* Custom Date Picker Modal */}
        {/* From Date */}
        <TouchableOpacity onPress={showFromDatePicker}>
          <View
            style={{
              backgroundColor: "#fafafa",
              borderWidth: 1,
              borderColor: "lightgrey",
              marginBottom: 10,
              paddingHorizontal: 15,
              alignItems: "center",
              justifyContent: "space-between",
              // width: Dimensions.get("window").width / 2 - 20,
              height: 40,
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 15 }}>
              {startDate == ""
                ? "From"
                : `From Date: ${moment(startDate).format("ll")}`}
            </Text>
            <FontAwesome name="calendar" size={15} color="black" />
          </View>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isFromDatePickerVisible}
          mode="date"
          onConfirm={handleFromConfirm}
          onCancel={hideFromDatePicker}
        />
        {/* To Date */}
        <TouchableOpacity onPress={showToDatePicker}>
          <View
            style={{
              backgroundColor: "#fafafa",
              borderWidth: 1,
              borderColor: "lightgrey",
              marginBottom: 10,
              paddingHorizontal: 15,
              alignItems: "center",
              justifyContent: "space-between",
              // width: Dimensions.get("window").width / 2 - 20,
              height: 40,
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 15 }}>
              {endDate == ""
                ? "To"
                : `To Date: ${moment(endDate).format("ll")}`}
            </Text>
            <FontAwesome name="calendar" size={15} color="black" />
          </View>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isToDatePickerVisible}
          mode="date"
          onConfirm={handleToConfirm}
          onCancel={hideToDatePicker}
        />

        {/* Select Tags Picker */}
        <DropDownPicker
          items={tagsMenu}
          placeholder="Tags"
          defaultValue={tags}
          multiple={true}
          multipleText={
            tags.length == 1
              ? "%d tag have been selected."
              : "%d tags have been selected."
          }
          dropDownMaxHeight={150}
          containerStyle={{
            height: 40,
            marginBottom: 10,
          }}
          style={{ backgroundColor: "#fafafa" }}
          itemStyle={{
            justifyContent: "flex-start",
          }}
          dropDownStyle={{ backgroundColor: "#fafafa" }}
          onChangeItem={(item) => {
            setTags(item);
          }}
        />

        {/* Submit Button */}
        <TouchableOpacity
          style={{
            width: "100%",
            height: 40,
            backgroundColor: "#24a0ed",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
          }}
          onPress={() => submitHandler()}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>SUBMIT</Text>
        </TouchableOpacity>

        {/* ques daily */}
        {state == "quesbardaily" && (
          <BarGraph
            value={analyticsData.adminAnalyticsData.dayques}
            width={90}
            zero={true}
            xlabel={"Dates"}
            ylabel={"Questions"}
          />
        )}
        {state == "queslinedaily" && (
          <LineGraph
            value={analyticsData.adminAnalyticsData.dayques}
            width={90}
            zero={true}
            legend={"Dates"}
            xlabel={"Dates"}
            ylabel={"Questions"}
          />
        )}
        {state == "quespiedaily" && (
          <PieGraph value={analyticsData.adminAnalyticsData.dayques} />
        )}

        {/* ques monthly */}
        {state == "quesbarmonthly" && (
          <BarGraph
            value={analyticsData.adminAnalyticsData.monthques}
            zero={true}
            xlabel={"Months"}
            ylabel={"Questions"}
          />
        )}
        {state == "queslinemonthly" && (
          <LineGraph
            value={analyticsData.adminAnalyticsData.monthques}
            zero={true}
            xlabel={"Months"}
            ylabel={"Questions"}
            legend={"Months"}
          />
        )}
        {state == "quespiemonthly" && (
          <PieGraph value={analyticsData.adminAnalyticsData.monthques} />
        )}

        {/* ques yearly */}
        {state == "quesbaryearly" && (
          <BarGraph
            value={analyticsData.adminAnalyticsData.yearques}
            zero={true}
            xlabel={"Years"}
            ylabel={"Questions"}
          />
        )}
        {state == "queslineyearly" && (
          <LineGraph
            value={analyticsData.adminAnalyticsData.yearques}
            xlabel={"Years"}
            ylabel={"Questions"}
            legend={"Years"}
            zero={true}
          />
        )}
        {state == "quespieyearly" && (
          <PieGraph value={analyticsData.adminAnalyticsData.yearques} />
        )}

        {/* ques custom date */}
        {state == "quesbardate" && (
          <BarGraph
            value={analyticsFind.adminAnalyticsFind}
            width={90}
            zero={true}
            xlabel={"Dates"}
            ylabel={"Questions"}
          />
        )}
        {state == "queslinedate" && (
          <LineGraph
            value={analyticsFind.adminAnalyticsFind}
            width={90}
            zero={true}
            legend={"Dates"}
            xlabel={"Dates"}
            ylabel={"Questions"}
          />
        )}
        {state == "quespiedate" && (
          <PieGraph value={analyticsFind.adminAnalyticsFind} />
        )}

        {/* ans daily */}
        {state == "ansbardaily" && (
          <BarGraph
            value={analyticsData.adminAnalyticsData.dayans}
            width={90}
            zero={true}
            xlabel={"Dates"}
            ylabel={"Answers"}
          />
        )}
        {state == "anslinedaily" && (
          <LineGraph
            value={analyticsData.adminAnalyticsData.dayans}
            width={90}
            zero={true}
            legend={"Dates"}
            xlabel={"Dates"}
            ylabel={"Answers"}
          />
        )}
        {state == "anspiedaily" && (
          <PieGraph value={analyticsData.adminAnalyticsData.dayans} />
        )}

        {/* ans monthly */}
        {state == "ansbarmonthly" && (
          <BarGraph
            value={analyticsData.adminAnalyticsData.monthans}
            zero={true}
            xlabel={"Months"}
            ylabel={"Answers"}
          />
        )}
        {state == "anslinemonthly" && (
          <LineGraph
            value={analyticsData.adminAnalyticsData.monthans}
            zero={true}
            xlabel={"Months"}
            ylabel={"Answers"}
            legend={"Months"}
          />
        )}
        {state == "anspiemonthly" && (
          <PieGraph value={analyticsData.adminAnalyticsData.monthans} />
        )}

        {/* ans yearly */}
        {state == "ansbaryearly" && (
          <BarGraph
            value={analyticsData.adminAnalyticsData.yearans}
            zero={true}
            xlabel={"Years"}
            ylabel={"Answers"}
          />
        )}
        {state == "anslineyearly" && (
          <LineGraph
            value={analyticsData.adminAnalyticsData.yearans}
            xlabel={"Years"}
            ylabel={"Answers"}
            legend={"Years"}
            zero={true}
          />
        )}
        {state == "anspieyearly" && (
          <PieGraph value={analyticsData.adminAnalyticsData.yearans} />
        )}

        {/* ans custom date */}
        {state == "ansbardate" && (
          <BarGraph
            value={analyticsFind.adminAnalyticsFind}
            width={90}
            zero={true}
            xlabel={"Dates"}
            ylabel={"Answers"}
          />
        )}
        {state == "anslinedate" &&
          (console.log(analyticsFind.adminAnalyticsFind),
          (
            <LineGraph
              value={analyticsFind.adminAnalyticsFind}
              width={100}
              zero={true}
              legend={"Dates"}
              xlabel={"Dates"}
              ylabel={"Answers"}
            />
          ))}
        {state == "anspiedate" && (
          <PieGraph value={analyticsFind.adminAnalyticsFind} />
        )}

        {/* tags */}
        {state == "tagbaruser" && (
          <BarGraph
            value={analyticsFind.adminAnalyticsFind}
            width={90}
            zero={true}
            xlabel={"Tags"}
            ylabel={"Subscribers"}
            // value={dateData.date.data}
            // xlabel={"Tags"}
            // ylabel={"Number of Subscribers"}
            // title={"Subscribers in Tags"}
            // label={"Subscribers"}
          />
        )}

        {state == "taglineuser" && (
          <LineGraph
            value={analyticsFind.adminAnalyticsFind}
            width={90}
            zero={true}
            legend={"Tags"}
            xlabel={"Tags"}
            ylabel={"Subscribers"}
            // value={dateData.date.data}
            // xlabel={"Tags"}
            // ylabel={"Number of Subscribers"}
            // title={"Subscribers in Tags"}
            // label={"Subscribers"}
          />
        )}

        {state == "tagpieuser" && (
          <PieGraph
            value={analyticsFind.adminAnalyticsFind}
            // value={dateData.date.data}
            // xlabel={"Tags"}
            // ylabel={"Number of Subscribers"}
            // title={"Subscribers in Tags"}
            // label={"Subscribers"}
          />
        )}

        {state == "tagbarques" && (
          <BarGraph
            value={analyticsFind.adminAnalyticsFind}
            width={90}
            zero={true}
            xlabel={"Tags"}
            ylabel={"Questions"}
            // value={dateData.date.data}
            // xlabel={"Tags"}
            // ylabel={"Number of Questions"}
            // title={"Questions in Tags"}
            // label={"Questions"}
          />
        )}

        {state == "taglineques" && (
          <LineGraph
            value={analyticsFind.adminAnalyticsFind}
            width={90}
            zero={true}
            legend={"Tags"}
            xlabel={"Tags"}
            ylabel={"Questions"}
            // value={dateData.date.data}
            // xlabel={"Tags"}
            // ylabel={"Number of Questions"}
            // title={"Questions in Tags"}
            // label={"Questions"}
          />
        )}

        {state == "tagpieques" && (
          <PieGraph
            value={analyticsFind.adminAnalyticsFind}
            // value={dateData.date.data}
            // xlabel={"Tags"}
            // ylabel={"Number of Questions"}
            // title={"Questions in Tags"}
            // label={"Questions"}
          />
        )}
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    allTags: state.getAllTagsState,
    analyticsData: state.adminAnalyticsDataState,
    analyticsFind: state.adminAnalyticsFindState,
  };
};

export default connect(mapStateToProps, { adminAnalyticsData, getAllTags })(
  AdminAnalytics
);

const styles = StyleSheet.create({});

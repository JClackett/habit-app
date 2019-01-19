import React, { memo } from "react"
import { View, TouchableOpacity, Text } from "react-native"
import dayjs from "dayjs"

function DaySwitcher({ startDate, setStartDate }) {
  const convertDateToDay = () => {
    if (startDate.isSame(dayjs(), "day")) {
      return "Today"
    } else if (startDate.isSame(dayjs().add(1, "day"), "day")) {
      return "Tomorrow"
    } else if (startDate.isSame(dayjs().subtract(1, "day"), "day")) {
      return "Yesterday"
    } else {
      return startDate.format("DD/MM/YYYY")
    }
  }

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
      }}
    >
      <TouchableOpacity
        onPress={() => setStartDate(startDate.subtract(1, "day"))}
      >
        <Text>Prev</Text>
      </TouchableOpacity>
      <Text>{convertDateToDay()}</Text>
      {startDate.isSame(dayjs(), "day") ? (
        <Text>{"      "}</Text>
      ) : (
        <TouchableOpacity
          onPress={() => {
            if (startDate.isSame(dayjs(), "day")) return
            setStartDate(startDate.add(1, "day"))
          }}
        >
          <Text>Next</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

export default memo(DaySwitcher)

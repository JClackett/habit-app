import React, { memo } from "react"

import UpdateHabit from "../graphql/habit/UpdateHabit"

import Modal from "./Modal"
import HabitForm from "./HabitForm"

function UpdateHabitModal(props) {
  return (
    <Modal
      title="Edit your habit"
      onCloseModal={props.onCloseModal}
      open={props.open}
    >
      <UpdateHabit habit={props.habit}>
        {updateHabit => (
          <HabitForm
            habit={props.habit}
            onHabbitDestroy={props.onCloseModal}
            onFormSubmit={async data => {
              await updateHabit(data)
              props.onCloseModal()
            }}
          />
        )}
      </UpdateHabit>
    </Modal>
  )
}

export default memo(UpdateHabitModal)

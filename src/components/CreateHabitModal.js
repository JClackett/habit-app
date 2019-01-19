import React, { memo } from "react"

import CreateHabit from "../graphql/habit/CreateHabit"

import Modal from "./Modal"
import HabitForm from "./HabitForm"

function CreateHabitModal(props) {
  return (
    <Modal
      open={props.open}
      title="Add a new habit"
      onCloseModal={props.onCloseModal}
    >
      <CreateHabit>
        {createHabit => (
          <HabitForm
            onFormSubmit={async data => {
              await createHabit(data)
              props.onCloseModal()
            }}
          />
        )}
      </CreateHabit>
    </Modal>
  )
}

export default memo(CreateHabitModal)

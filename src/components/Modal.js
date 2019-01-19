import React, { memo } from "react"
import { TouchableOpacity, Modal as ReactModal } from "react-native"
import styled from "styled-components/native"

function Modal({ open, title, closeText, children, onCloseModal }) {
  return (
    <ReactModal animationType="slide" transparent={false} visible={open}>
      <StyledModalWrapper>
        <StyledModalHeader>
          {title && <StyledHeader>{title}</StyledHeader>}
          <TouchableOpacity onPress={onCloseModal}>
            <StyledHeader small>{closeText || "Cancel"}</StyledHeader>
          </TouchableOpacity>
        </StyledModalHeader>
        {children}
      </StyledModalWrapper>
    </ReactModal>
  )
}

const StyledModalWrapper = styled.View`
  width: 100%;
  flex: 1;
  background-color: ${p => p.theme.colorBackground};
  padding: ${p => p.theme.paddingMedium};
`

const StyledModalHeader = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  margin-bottom: ${p => p.theme.paddingLarge};
  padding-top: ${p => p.theme.paddingMedium};
`

const StyledHeader = styled.Text`
  text-transform: uppercase;
  color: white;
  font-size: ${p => (p.small ? p.theme.fontSmall : p.theme.fontMedium)};
  letter-spacing: ${p => p.theme.letterSpacing};
`

export default memo(Modal)

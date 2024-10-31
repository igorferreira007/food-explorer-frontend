import { useState } from "react"
import { Container } from "./styles"
import { FiPlus, FiX } from "react-icons/fi"

export function Tag({ value, isNew = false, onClick, ...rest }) {
  return (
    <Container $isnew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />

      <button
        type="button"
        className={isNew ? "button-add" : "button-delete"}
        onClick={onClick}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}

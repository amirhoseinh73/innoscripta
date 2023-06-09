import styled from "styled-components"
import { AlertType } from "../../@types/global"

type AlertStyledType = {
  type?: AlertType
}

const AlertStyled = styled.section<AlertStyledType>(
  ({ type }) => `
  background-color: ${
    type === "error"
      ? "var(--color-alert-error-bg)"
      : type === "success"
      ? "var(--color-alert-success-bg)"
      : type === "info"
      ? "var(--color-alert-info-bg)"
      : type === "warning"
      ? "var(--color-alert-warning-bg)"
      : "var(--color-alert-gray-bg)"
  };
  border: 1px solid ${
    type === "error"
      ? "var(--color-alert-error-border)"
      : type === "success"
      ? "var(--color-alert-success-border)"
      : type === "info"
      ? "var(--color-alert-info-border)"
      : type === "warning"
      ? "var(--color-alert-warning-border)"
      : "var(--color-alert-gray-border)"
  };
  color: ${
    type === "error"
      ? "var(--color-alert-error-text)"
      : type === "success"
      ? "var(--color-alert-success-text)"
      : type === "info"
      ? "var(--color-alert-info-text)"
      : type === "warning"
      ? "var(--color-alert-warning-text)"
      : "var(--color-alert-gray-text)"
  };
`
)

export default AlertStyled

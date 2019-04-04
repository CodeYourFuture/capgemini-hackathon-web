import React from "react"
import styled from "styled-components"

const Bg = styled.div`
  min-height: 380px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  form {
    display: flex;
    flex-direction: column;
  }
`

const Form = () => (
  <Bg>
    <form action="https://docs.google.com/forms/d/e/1FAIpQLSfpbfoo3yrW5hwmegNSYrbroVKG6GtHfsP3L3Wws4ZGOmlVBA/formResponse" method="post">
      <label>Full name *</label>
      <input type="text" placeholder="Full name" name="entry.2092238618" required></input>

      <label>Email *</label>
      <input type="email" placeholder="Email" name="entry.1556369182" required></input>

      <label>Organisation *</label>
      <input type="text" placeholder="Organisation" name="entry.479301265" required></input>

      <button type="submit">Send</button>
    </form>
  </Bg>
)

export default Form

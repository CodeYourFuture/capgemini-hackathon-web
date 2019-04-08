import React from "react"
import styled from "styled-components"

const XForm = ({ className }) => (
  <form className={className} action="https://docs.google.com/forms/d/e/1FAIpQLSfpbfoo3yrW5hwmegNSYrbroVKG6GtHfsP3L3Wws4ZGOmlVBA/formResponse" method="post">
    <label>Full name *</label>
    <input type="text" placeholder="Full name" name="entry.2092238618" required></input>

    <label>Email *</label>
    <input type="email" placeholder="Email" name="entry.1556369182" required></input>

    <label>Organisation *</label>
    <input type="text" placeholder="Organisation" name="entry.479301265" required></input>

    <button type="submit">Send</button>
  </form>
)

const Form = styled(XForm)`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  min-width: 350px;
  background: rgb(136, 77, 254, 0.7);
  padding: 20px;
  width: 400px;

  button {
    border-radius: 3px;
    background: rgb(106, 254, 77);
    border: 0px;
    font-size: 14px;
    padding: 10px 15px;
    margin: 10px 0 0 0;
  }
`

export default Form

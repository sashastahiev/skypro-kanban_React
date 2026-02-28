import styled from "styled-components"

const Sloader = styled.div`
  text-align: center;
  margin-top: 40vh;
`
const Sspinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #007bff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 0 auto 16px;
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
`
const SloadText = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #565eef;
`
function Loader() {
    return (
        <>
        <Sloader className="loader">
          <Sspinner className="spinner"></Sspinner>
          <SloadText>Данные загружаются...</SloadText>
        </Sloader>
        </>
    )
}

export default Loader
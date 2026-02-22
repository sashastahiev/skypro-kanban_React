import Column from "../components/Column";
function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <Column text="Без статуса"/>
            <Column text="Нужно сделать"/>
            <Column text="В работе"/>
            <Column text="Тестирование"/>
            <Column text="Готово"/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;

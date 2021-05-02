import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // Alert display
      showAlert(true, "danger", "Пожалуйста заполните форму");
    } else if (name && isEditing) {
      // edit
    } else {
      showAlert(true, "success", "Заметка было добавлено успешно");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  const clearList = () => {
    showAlert(true, "danger", "Заметка было полностью очищена");
    setList([]);
  };
  const removeItem = (id) => {
    showAlert(true, "danger", "Заметка было удалено");
    setList(list.filter((item) => item.id !== id));
  };
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <h3>Список Заметки</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="Место для заметки"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "Изменить" : "Добавить"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} />
          <button onClick={clearList} className="clear-btn">
            Очистить
          </button>
        </div>
      )}
    </section>
  );
}

export default App;

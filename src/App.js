import { useState, useEffect } from 'react';
import formJson from './formElement.json';
import Element from './components/Element';
import { FormContext } from './FormContext';

function App() {
  const [elements, setElements] = useState(null);
  useEffect(() => {
    setElements(formJson);
  }, []);
  const { fields } = elements ?? {};
  const handlesubmit = () => {
    console.log(elements);
  };
  const handleChange = (id, event) => {
    const newElements = { ...elements };
    newElements.fields.forEach((data) => {
      const {
        type,
        name,
        field,
        id,
        label,
        visible,
        required,
        readonly,
        currencyChar,
        nbDecimal,
        items,
        ListId,
        ordeR_ITEM,
        multipleClosedList,
      } = data;
      if (field === 'field') {
        field['field'] = event.target.value;
      }
      setElements(newElements);
    });
  };

  return (
    <FormContext.Provider value={{ handleChange }}>
      <div className="App container">
        <form className="row g-3">
          {fields
            ? fields.map((data, i) => <Element key={i} data={data} />)
            : null}

          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">
              Submit
            </button>
          </div>
        </form>
      </div>
    </FormContext.Provider>
  );
}

export default App;

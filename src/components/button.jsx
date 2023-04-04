import Button from 'react-bootstrap/Button';

function CreateButton({arrayInput}) {
    let minArray = [];
    const handleNextStep = (e) => {
        minArray.push(e.target.innerHTML);
        minArray.forEach(a => console.log(a));
      };

      
    return (
      <>
        {arrayInput.map(btn => <Button value={btn} onClick={e => handleNextStep(e)} variant="primary">{btn}</Button>)}
      </>
    );
  }

  export default CreateButton;
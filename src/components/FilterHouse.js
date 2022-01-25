const FilterHouse = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: 'house',
      value: ev.target.value,
    })
  }
  return (
    <>
      <label htmlFor="house">Selecciona la casa:</label>
      <select name="house"
        id="house"
        onChange={handleChange}
        value={props.filterHouse}
      >
        <option value="gryffindor">Gryffindor</option>
        <option value="hufflepuff">Hufflepuff</option>
        <option value="ravenclaw">Ravenclaw</option>
        <option value="slytherin">Slytherin</option>
      </select>
    </>
  )
}

export default FilterHouse;
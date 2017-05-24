function TagList({tags}){
  const rows = tags.map(t => (<tr key={t.tag}>
    <td>{t.tag}</td>
    <td>{t.pomodori}</td>
    </tr>))
  return (
    <div className="column is-one-third">
      <table className="table">
        <thead>
          <tr>
            <th>Tag</th>
            <th>Pomodori</th>
          </tr>
        </thead>
        <tbody>
         {rows}
        </tbody>
      </table>
    </div>
  )
}


export default TagList
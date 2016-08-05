// TODO: probabilmente non serve wrappare Map 
const _store = new Map()

const commandStore = {
  store: (cmd) => _store.set(cmd.id, cmd),
  contains: (id) => _store.has(id),
  remove: (id) => _store.delete(id)
}

export default commandStore
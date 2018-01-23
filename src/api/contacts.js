// Mock API
const contacts = [
  { id: 0, name: 'APerson', phone: '(46) 111-1234' },
  { id: 1, name: 'BPerson', phone: '(46) 222-1234' },
  { id: 2, name: 'CPerson', phone: '(46) 333-1234' }
]

export const getContacts = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(contacts)
    }, 1000)
  })
}

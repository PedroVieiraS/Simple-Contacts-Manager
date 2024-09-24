const DB_KEY = "@Contacts"

export const STORAGE_SERVICE = {
    listContacts: () =>{
        const storage = localStorage.getItem(DB_KEY)

        if(storage){
            return JSON.parse(storage)

        }
        return[]
    },

    createContacts: (contname) => {
        const storage = localStorage.getItem(DB_KEY)

        const newContact = { contacts: contname };

        if(storage){
            const storageParsed = JSON.parse(storage)

            const contacts = [...storageParsed, newContact]

            return localStorage.setItem(DB_KEY, JSON.stringify(contacts))
        }

        return localStorage.setItem(DB_KEY,JSON.stringify([newContact]))

    },
    deleteContact: (index) => {
        const storage = localStorage.getItem(DB_KEY);
        if (storage) {
            const storageParsed = JSON.parse(storage);
            const contacts = storageParsed.filter((_, i) => i !== index);
            localStorage.setItem(DB_KEY, JSON.stringify(contacts));
        }
    },
    saveContacts: (contacts) => {
        localStorage.setItem(DB_KEY, JSON.stringify(contacts));
    }
    
}
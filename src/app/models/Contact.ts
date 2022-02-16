
export class Contact {

    constructor(
        public Id: number,
        public FirstName?: string,
        public LastName?: string,
        public TelephoneNumber?: string,
        public BirthDate?: Date,
        public Email?: string,
        public CivilStatus?: string,
        public Disabled?: boolean
    ){}


}

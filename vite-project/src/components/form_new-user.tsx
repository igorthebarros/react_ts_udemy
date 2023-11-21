export function FormNewUser(){
    return (
        <div>
             
        </div>
    )
}

interface FormNewUserProps{
    name: string;
    surname: string;
    nickname?: string;
    birthDate: Date; 
    email: string;
    password: string;
  }
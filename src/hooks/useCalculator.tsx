import { useRef, useState } from 'react'

enum Operators {
    add, subtract, divide, multiply
}

export const useCalculator = () => {
    
    const [ number, setNumber ] = useState('100')
    const [ lastNumber, setLastNumber ] = useState('0')

    const lastOperator = useRef<Operators>()
   
    const clean = () => {
        setNumber( '0' )
        setLastNumber('0')
    }

    const buildNumber = ( textNumber: string ) => {        

        // no type double point
        if( number.includes( '.' ) && textNumber === '.' ) return;

        if( number.startsWith( '0' ) || number.startsWith( '-0' ) ){

            // decimal point
            if( textNumber === '.' ){

                setNumber( number + textNumber );

                //evaluate if is other zero and exist a new point
            }else if( textNumber === '0' && number.includes('.')){

                setNumber( number + textNumber );

                //evaluate if is different from zero and not have point
            }else if( textNumber !== '0' && !number.includes('.') ){

                setNumber( textNumber )

                //avoid the 0.00000000000
            }else if( textNumber === '0' && !number.includes('.')){

                setNumber( number )

            }

        }else{
            setNumber( number + textNumber )
        }

    }
    
    const positiveNegative = () => {
        if( number.includes('-') ){

            setNumber( number.replace( '-', '' ) );

        }else{

            setNumber( '-' + number )

        }
    }

    const buttonDelete = () => {

        let negative = ""
        let tempNumber = number;
        if( tempNumber.length > 1 ){
            setNumber( negative + tempNumber.slice( 0, -1 ))
        }else{
            setNumber( '0' )
        }

    };


    const changeNumberForLast = () => {
        if( number.endsWith( '.' ) ) {
            setLastNumber( number.slice(0,-1) )
        }else{
            setLastNumber( number )
        }
        setNumber('0')
    }


    const ButtonDivide = () => {
        changeNumberForLast();
        lastOperator.current = Operators.divide;
    }

    const ButtonMultiply = () => {
        changeNumberForLast();
        lastOperator.current = Operators.multiply;
    }

    const ButtonSubtract = () => {
        changeNumberForLast();
        lastOperator.current = Operators.subtract;
    }

    const ButtonAdd = () => {
        changeNumberForLast();
        lastOperator.current = Operators.add;
    }


    const calc = () => {
        
        if( number === '0' ) return;

        const num1 = Number( number );
        const num2 = Number( lastNumber )

        

        switch ( lastOperator.current ) {
            case Operators.add:
                setNumber( `${ num1 + num2 }` )
                break;
            case Operators.subtract:
                setNumber( `${ num2 - num1  }` )
                break;
            case Operators.divide:
                if( num1 === 0 ){
                  setNumber('It is not possible to divide by zero')
                }else{
                    setNumber( `${ num2 / num1 }` )
                }
                break;
            case Operators.multiply:
                setNumber( `${ num1 * num2 }` )
                break;
            default:
                break;
        }

        setLastNumber( '0' )

    };


    return {
        number,
        setNumber,
        lastNumber,
        setLastNumber,
        clean,
        buildNumber,
        positiveNegative,
        buttonDelete,
        ButtonDivide,
        ButtonMultiply,
        ButtonSubtract,
        ButtonAdd,
        calc,
    }


};
    
   
    
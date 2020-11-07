import React, { Component } from 'react';
import './App.css';
import {Alert} from 'react-bootstrap';
import {Button} from 'react-bootstrap'; 
import {ButtonGroup} from 'react-bootstrap';
import {ToggleButton} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
 import {Jumbotron} from 'react-bootstrap'; 
 import {Modal} from 'react-bootstrap';



class Quiz extends Component {


    state={
            questions:["Everything in React is a ______ ?","What is the name of React.js Developer ","How many elements does react component return ?" , "Reactjs data flow implementation?" ,"Which is used to update the state?","Which of the following API is necessary for React.js component?",'To achieve dynamic UI updates. Which of the following needs to be updated ?','Which of the following method define default values for properties using props?','Which of the following is not components of Redux?','Which helps react for keeping their data unidirectional?'],
            choices:[['Module','Component','Package','Class'],['Jordan Lee','Tom Lee','Jordan mike','Jordan Walke'],['2 Elements','1 Element','Multiple Elements','None of These'],['Two way data flow','One way data flow','No one','Three way data flow'],['setNewnumber','setnumber','setState','setInitialnumber'],['RenderComponent','Render','Props','State'],['renderComponent','render','props','state'],['getDefaultProps','getPropsValue','getInitialState',' getWillState'],['view','state','reducer','action'],['props','flux','dom','jsx']],
            answers:["Component",'Jordan Walke','Multiple Elements','One way data flow','setState','Render','props','getDefaultProps','state','flux'],
            index:-1,
            disbaled:true,
            nextDis:false,
            score:0,
            curValue:'',
            selectedIndex:0,
            responseForIncorrect:false,
            responseForCorrect:false,
            modalShow:false,
            lastShow:true,
            count:20,
            pauseTimer:'',
            pauseQuestions:''
          
            
            

           }


    start = () => {
        
        let indice = this.state.index;
        ++indice;
        this.setState({ index: indice})
      
        if(indice >-1){ 
            console.log("enters into start");
            
            //this.state.pauseQuestions=setInterval( this.nextQues  ,20000);

            console.log("index inside count"+indice);
           
           
            // this.state.pauseTimer= setInterval(()=>{

            //     let p= --this.state.count  ;

            //     if(this.state.count>-1) {
            //          this.setState({ count: p})
            //         }
            //     else {
            //         this.setState({ count: 20})
            //     }
            //  } ,1000);
            
            
             
          
            
}
       
    
    }

   
 nextQues =()=>{

    
    let indice = this.state.index;
    console.log(indice);
  
    this.setState({ responseForIncorrect: false })
    this.setState({ responseForCorrect: false })
 
        
    if(indice>-1 && indice<this.state.questions.length-1)
   {
    ++indice;
    console.log("index increase");
    this.setState({ index: indice})
   
    this.setState({ count: 20})

   
   
   }

//    else{
//     clearInterval(this.state.pauseTimer);
//     clearInterval(this.state.pauseQuestions);
//     //this.finalResult();
//    }

  


  
   

}



    closeMe=()=>{
        
        
        let indice = this.state.index;

        this.setState({ responseForIncorrect: false })
        this.setState({ responseForCorrect: false })

        if(this.state.index==this.state.questions.length-1){
           
            this.setState({ modalShow: true })
            this.setState({ lastShow: false })

        }

       
        
        if ( this.state.curValue && indice <this.state.questions.length-1) {
            console.log("nul");
            ++indice;
            console.log(indice);



            if (indice > 0) {
                this.setState({ disbaled: false })
            }

            else if (indice == 0) {

                this.setState({ disbaled: true })

            }

            if (indice == this.state.questions.length - 1) {

                this.setState({ nextDis: true })
            }

            this.setState({ index: indice })

        }
       
        this.setState({ count: 20})
}

    next = () => {



        let indice = this.state.index;

      

        if (this.state.answers[indice] == this.state.curValue) {
            //alert('correct answer');
            this.setState({ responseForCorrect: true })
           
            this.setState({ score: ++this.state.score })

            setTimeout(this.closeMe ,1500);
        }
        if ((this.state.curValue !== '') && (this.state.answers[indice] !== this.state.curValue)) {
            //alert('wrong answer');
            this.setState({ responseForIncorrect: true })
            setTimeout(this.closeMe ,1500);
           
        }

        if ((this.state.curValue == '') && (this.state.answers[indice] !== this.state.curValue)) {
            alert('Please choose atleast one option');
           
           
        }

       


    };


    prev = () => {

        let indice = this.state.index;
        --indice;
        console.log(indice);

        indice = indice < 1 ? 0 : indice;
        if (indice > 0) {
            this.setState({ disbaled: false })
        }

        else if (indice == 0) {

            this.setState({ disbaled: true })

        }

        if (indice < this.state.questions.length - 1) {

            this.setState({ nextDis: false })
        }




        this.setState({ index: indice })


    };



    radioChange = (event,index) => {
        // this.setState({ checked:index })
        // alert(event.target.value );
        // alert(index );
       
        this.setState({ curValue: event.target.value ,selectedIndex:index})




    }


    finalResult =()=>{
        let indice = this.state.index;
         console.log('last index'+indice);
       

        if (this.state.answers[indice] == this.state.curValue) {
            //alert('correct answer');
            
            this.setState({ responseForCorrect: true })
            this.setState({ score: ++this.state.score })
        }
        if (  (this.state.answers[indice] !== this.state.curValue)) {
            //alert('wrong answer');
            this.setState({ responseForIncorrect: true })
        }
        setTimeout(this.closeMe ,1500);
       
    }

    quizToInitialState=()=>{
        this.setState({ index: -1 ,modalShow:false})
        window.location.reload();
        
       
    }

   


    render() {


      
        let choices = this.state.choices.map(v => 
        
        v.map( l => l)


        
        )

     

     






        return (
            <div className='frame'>


              <h1 style={{color:'white',marginBottom:'50px',marginLeft:'20px'}}>React Quiz</h1>
               {/* <h3 style={{color:'white'}}>Time left : {this.state.count}</h3>  */}

              {
                    (this.state.modalShow)?
                    <Modal  backdrop={true}  size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered show={true}>
                   
                        { (this.state.score > ( (this.state.questions.length)/2)) ?<div><Modal.Header >   <h2 class='mode win'>Congratulations !!! </h2>
                    </Modal.Header> <Modal.Body> <p class='mode'>Great work ! You have cleared the  quiz </p>
                    <h5 class='mode'>Your Score : {this.state.score}/{this.state.questions.length}</h5> </Modal.Body></div> :  
                    <div><Modal.Header >   <h2 class='mode loss'>No Biggie !!!!!</h2>
                    </Modal.Header> <Modal.Body><p class='mode'> Unfortunately , You have not cleared the Quiz.</p>
                    <h5 class='mode'>Your Score : {this.state.score}/{this.state.questions.length}</h5></Modal.Body></div> 
                    }
                       
                    
                    <Modal.Footer>
                        <Button onClick={this.quizToInitialState} variant="dark" >
                            Close 
                        </Button>
                        
                    </Modal.Footer>
                </Modal>  : null}


                { (this.state.index == -1) ?
                <Jumbotron>
                      <h1>Hi React Lover!</h1>
                         <p>
                         This React Quiz will surely help you to brush up your React concepts. It’s Quiz Time!
                           
                         </p>
                         <p>
                                   <Button className="" onClick={this.start} variant="primary">Start </Button>
                         </p>
                </Jumbotron> : null
                }
             
                { (this.state.index>-1  )?
                <div className='questionFrame'>
                           
                    <div >

                         <p style={{color:'white',marginLeft:'30px'}}>Question {this.state.index+1} of {this.state.questions.length}</p>
                        <Card id='card'>
                            <Card.Body>  <p id="ques">{this.state.questions[this.state.index]}</p></Card.Body>
                        </Card>
                        

                        <div className='choices'>

                        
                            <ButtonGroup className='choices' toggle>
                                {choices[this.state.index].map((radio, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        type="radio"
                                        variant="info"
                                        name="radio"
                                        value={radio}
                                        className="radios"
                                        onChange={(event) => this.radioChange(event, idx)}
                                    >
                                        {radio}
                                    </ToggleButton>
                                ))}
                            </ButtonGroup>
                            

                           
                        </div>


                       <div class="alerts">
                       {(this.state.responseForIncorrect) ? <Alert variant="danger"  onClose={this.closeMe} dismissible>
                            <Alert.Heading>Incorrect Answer</Alert.Heading>
                            <p>
                                Unfortunately you have select the incorrect answer !
                           </p>
                        </Alert> : null}

                        {(this.state.responseForCorrect) ? <Alert variant="success"  onClose={this.closeMe} dismissible>
                            <Alert.Heading>Correct Answer</Alert.Heading>
                            <p>
                                Great ! You have select the right answer 
                           </p>
                        </Alert> : null}
                       </div>
                       
                        
                    </div>
                     <h3 style={{color:'white',marginBottom:'50px'}}>Score : {this.state.score}/{this.state.questions.length}</h3> 

                     {
                        (this.state.index && this.state.index < this.state.questions.length)?
                        <Button className="btnMe prev" onClick={()=>this.prev()} variant="warning">Prev</Button>
                        :null
                     }


                     {
                        (this.state.index < this.state.questions.length-1)?
                        <Button className="btnMe next" onClick={this.next} variant="warning">Next</Button>
                        :null
                     }

                     {
                        (this.state.index == this.state.questions.length-1)?
                        <Button  className="btnMe next" onClick={this.finalResult} variant="success">Submit</Button>
                        :null
                     }

                     
                     
                      
                    
                      
                </div>
                :null
            }
           
            </div>
        );
    }
}

export default Quiz;
import {useState, useEffec} from 'react';
import {Button, Form, Modal} from 'react-bootstrap';

export default function Home(){

	
	const [nameData, setNameData] = useState([])



	const [showAdd, setShowAdd] = useState(false)

	const openAdd = () => setShowAdd(true)
	const closeAdd = () => setShowAdd(false)

	return(
			<>
				<div class="container-fluid d-flex jumbotron justify-content-end col-md-10 my-3 p-4 flex-column align-items-center" id="banner">
					    <div class="d-flex landingPgBtn mb-5 align-items-center">
					    	<div id="demo" class="text-align-center p-4">
						    	<h4 class="m-0 p-0">SCHEDULE A DEMO</h4>
						    	<h6 class="m-0 p-0">Learn More About FloQast.</h6>
						    </div>
						    <div id="triangle">
						    </div>
						    <div id="div2">
						    	<h5>Learn How FloQast Can <strong>Improve Your Month-End</strong></h5>
						    	<input type="text" placeholder = " First Name*"/>
						    	<input class= "mx-2" type="text" placeholder = " Email*"/>
						    	<Button variant="success">SCHEDULE NOW</Button>{' '}
						    </div>
					    </div>
				    </div>
				
				<Modal show={showAdd} onHide={closeAdd}>
					<Form>
						<Modal.Header closeButton>
							<Modal.Title>Schedule Now</Modal.Title>
						</Modal.Header>

						<Modal.Body>
							<Form.Group controlId="memberName">
								<Form.Label>Name</Form.Label>
								<Form.Control
									type="text"
									required
								/>
							</Form.Group>

							<Form.Group controlId="memberAddress">
								<Form.Label>Address</Form.Label>
								<Form.Control
									type="text"
									required
								/>
							</Form.Group>

							<Form.Group controlId="memberContactNo">
								<Form.Label>Contact No.</Form.Label>
								<Form.Control
									type="text"
									required
								/>
							</Form.Group>

							<Form.Group controlId="memberBirthday">
								<Form.Label>Birthday</Form.Label>
								<Form.Control
									type="date"
									required
								/>
							</Form.Group>
						</Modal.Body>

						<Modal.Footer>
							<Button variant="secondary" onClick={closeAdd}>Cancel</Button>
							<Button variant="success" type="submit">Save</Button>
						</Modal.Footer>
					</Form>
				</Modal>	
			</>
		)
}
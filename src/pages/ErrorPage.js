import {Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function ErrorPage(){

	return(
			<Row>
				<Col className="p-5">
					<h1>404 - Not Found</h1>
					<p>The page you are looking cannot be found</p>
					<Button variant="primary" as={Link} to="/">Back Home</Button>
				</Col>
			</Row>
		)
}
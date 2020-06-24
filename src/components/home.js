import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

function Home() {
	function addteamone() {
		var teamOneScore = document.getElementById('teamone').innerHTML
		teamOneScore++
		document.getElementById('teamone').innerHTML = teamOneScore
	}
	function addteamtwo() {
		var teamTwoScore = document.getElementById('teamtwo').innerHTML
		teamTwoScore++
		document.getElementById('teamtwo').innerHTML = teamTwoScore
	}
	return (
		<div>
			<Grid container spacing={2}>
				<Grid item>
					<Typography variant='h1' component='h2' gutterBottom>
						Team #1
					</Typography>
				</Grid>
				<Grid item>
					<Typography variant='h1' component='h2' gutterBottom>
						Team #2
					</Typography>
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item>
					<Typography id='teamone' variant='h1' component='h2' gutterBottom>
						0
					</Typography>
				</Grid>
				<Grid item>
					<Typography id='teamtwo' variant='h1' component='h2' gutterBottom>
						0
					</Typography>
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item>
					<Typography variant='h1' component='h2' gutterBottom>
						<Button
							variant='contained'
							color='primary'
							onClick={() => {
								addteamone()
							}}>
							Team #1
						</Button>
					</Typography>
				</Grid>
				<Grid item>
					<Typography variant='h1' component='h2' gutterBottom>
						<Button
							variant='contained'
							color='primary'
							onClick={() => {
								addteamtwo()
							}}>
							> Team #2
						</Button>
					</Typography>
				</Grid>
			</Grid>
		</div>
	)
}
export default Home

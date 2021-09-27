import { Container, Grid, makeStyles } from "@material-ui/core";
import ProfileSidebar from "../../components/Customer/Profile/ProfileSidebar";
import YourPoints from "../../components/Customer/Points/YourPoints";
import { useAuth } from "../../components/context/AuthProvider";


const useStyles = makeStyles(()=>(
{
   
}), {
    index: 1
})

export default function MyAccount(props){

    const styles = useStyles();
    const [auth, authDispatch] = useAuth();

    return (
        <Container style={{marginTop:60}}>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={4} md={3}>
                    <ProfileSidebar></ProfileSidebar>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                    <YourPoints></YourPoints>
                </Grid>
            </Grid>
            <br></br> <br></br>   
                
        </Container>
    )    
}
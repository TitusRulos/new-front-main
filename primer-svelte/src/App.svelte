
 <script>
  import { Router, Route, Link } from 'svelte-routing';
  import Login from "../src/routers/Login.svelte";
  import Dashboard from '../src/routers/DashBoard.svelte';

</script>

<Router>
    <Link to="/"></Link>
    <Link to="/DashBoard"></Link>

  <Route path="/" component={Login} />
  <Route path="/DashBoard" component={Dashboard} />
 
</Router>


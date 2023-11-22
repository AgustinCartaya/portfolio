const Resume = () => {
  return (
    <form action="/action_page.php">
      <input type="text" id="fname" name="fname" value="John" />
      <label htmlFor="lname">Last name:</label>
      <input type="text" id="lname" name="lname" value="Doe" />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Resume;

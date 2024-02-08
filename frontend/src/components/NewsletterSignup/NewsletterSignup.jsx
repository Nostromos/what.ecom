/**
 * Newsletter signup component
 */

export default function NewsletterSignup() {
  
  return (
    <section>
      <h3>Newsletter Signup</h3>
      <p>Sign up for the newsletter here.</p>
      <form id="newsletter-signup">
      <label htmlFor="newsletter-signup-email">Email:</label>
        <input type="email" id="newsletter-signup-email" name="newsletter-signup-email"></input>
        <button type="submit" value="Signup">Signup</button>
      </form>
    </section>
  )
}
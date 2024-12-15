```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>This is a paragraph of text.</p>
      {/* Improved error handling  */}
      {try {
        return <MyComponent/>;
      } catch (error) {
        console.error("Error rendering MyComponent:", error);
        return <p>Error: Component not found.</p>;
      }}
    </div>
  );
}

// components/MyComponent.js

export default function MyComponent() {
  return <>This component is working!</>;
}
```
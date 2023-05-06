export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconuts"];

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {상품.map((a, i) => {
        return (
          <div className="food" key={i}>
            <img src={"food" + i + ".png"} className="food-img" />
            {/* {`/food${i}.png`}로도 나타낼 수 있다. */}
            <h4>{a} $40</h4>
          </div>
        );
      })}
    </div>
  );
}

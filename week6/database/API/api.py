from fastapi import FastAPI
import uvicorn

from pydantic import BaseModel

class Item(BaseModel):
    name: str

app = FastAPI()
items = []

@app.get("/")
def read_root():
    return {"message": "Hello World:"}

@app.post("/items")
def create_item(item: Item):
    new_item = {"id": len(items)+1, "name": item.name}
    items.append(new_item)
    return new_item

@app.get("/items/{item_id}")
def read_item(item_id: int):
    for item in items:
        if item["id"] == item_id:
            return item
    return {"error": "Item not found"}

@app.get("/search")
def search_items(q: str = None):
    if q is None:
        return {"results": items}
    filtered = [itm for itm in items if q.lower() in itm["name"].lower()]
    return {"query": q, "results": filtered}

if __name__ == "__main__":
    uvicorn.run(app, host="localhost",port=8000)


#uvicorn api:app --reload



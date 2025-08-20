from ORM.db import get_db
from ORM.models import Routes, Airports
from collections import deque

# Utility to build the adjacency list (graph) from routes
def buildGraph():
    with get_db() as db:
        routes = db.query(Routes.departure, Routes.destination).all()
        graph = {}
        for departure, destination in routes:
            if departure not in graph:
                graph[departure] = []
            graph[departure].append(destination)
        return graph

# BFS to find a path from start to end
def findRoutePath(startId, endId):
    graph = buildGraph()
    queue = deque([[startId]])
    visited = set()

    while queue:
        path = queue.popleft()
        node = path[-1]
        if node == endId:
            return path  # Found a path!
        if node in visited:
            continue
        visited.add(node)
        neighbors = graph.get(node, [])
        for neighbor in neighbors:
            queue.append(path + [neighbor])
    return None  # No path found

# Breadth-First Search (BFS)
def findRoute(fromId, toId):
    try:
        path = findRoutePath(int(fromId), int(toId))
        print("Found path:\n")
        print(path)
        if not path:
            return 0

        with get_db() as db:
            airports = db.query(Airports).filter(Airports.id.in_(path)).all()
            airport_map = {a.id: a for a in airports}
            ordered_airports = [airport_map[id] for id in path]

            return ordered_airports
    except Exception as error:
        return 0

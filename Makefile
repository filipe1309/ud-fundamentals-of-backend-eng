# run tests
test:
	@echo "🟢 Running tests..."
	npm run test

install:
	@echo "📦 Installing dependencies..."
	npm install

# run node
run:
	@echo "🏁 Running code..."
	npm run build && npm run start

help:
	@echo "📖 Available commands:"
	@echo "  make test"
	@echo "  make run"
	@echo "  make help"

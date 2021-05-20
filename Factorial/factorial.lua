function factorial(n)
    if n == 0 then
      return 1
    else
      return n * factorial(n - 1)
    end
end
  
function addto(x)
    return function(y)
      return x + y
    end
end
  
fourplus = addto(4)
print(fourplus(3))

fact = factorial(5)
print(fact)

local fptr = io.open(os.getenv("OUTPUT_PATH"), "w")

local n = io.stdin:read("*n", "*l")

local result = factorial(n)

fptr:write(result, "\n")

fptr:close()
https://leetcode.com/problems/product-sales-analysis-i/

# Write your MySQL query statement below
Select product_name, year, price FROM Sales a, Product b WHERE a.product_id = b.product_id
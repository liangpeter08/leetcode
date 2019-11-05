https://leetcode.com/problems/product-sales-analysis-ii/

# Write your MySQL query statement below
Select b.product_id, SUM(quantity) AS total_quantity FROM Product b JOIN Sales a ON a.product_id = b.product_id Group by b.product_id
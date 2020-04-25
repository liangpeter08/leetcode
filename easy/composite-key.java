import java.util.*;



// https://docs.oracle.com/javase/8/docs/api/java/util/Map.html
class Solution {


    /**
     * A CompositeKey is:
     * - the parts and their order define a CompositeKey
     * - intended for use as a key in a Map
     *
     * Implement CompositeKey
     */
    public static class CompositeKey{
        private Object[] keys;
      //  Object[]
        public CompositeKey(Object... keyParts) {
          keys = keyParts;
        }
      
        public Object[] getKeys() {
          return keys; 
        }
      
        public int hashCode() {
          int sum = 0;
          for (int i = 0; i < keys.length; i++) {
            sum += keys[i].hashCode(); 
          }
          return sum;
        }
        
        public boolean equals(Object obj) {
          Object[] otherKeys = ((CompositeKey)obj).getKeys();
          if (otherKeys.length != keys.length) {
            return false;
          }
          
          for (int i = 0; i < keys.length; i++) {
            if (keys[i].hashCode() != otherKeys[i].hashCode()) {
              return false; 
            }
          }
          return true;
        }
      
    }



    /**
     *
     * Don't change the code below, it will test your code
     *
     */
      public static void test__equals() {
        CompositeKey key = new CompositeKey(new String("one"));
        CompositeKey key1 = new CompositeKey(new String("one"));
        
         printResult("test__equals", true, key.equals(key1));
    }


  
  
    public static void test__put_get() {
        CompositeKey key = new CompositeKey("one", 2, new Date(3L));

        Map<CompositeKey, String> m = new HashMap<>();
        m.put(key, "value1");

        Object retrievedValue = m.get(new CompositeKey("one", 2, new Date(3L)));

        printResult("test__put_get", "value1", retrievedValue);
    }

    public static void test__multi_put_get() {
        CompositeKey key = new CompositeKey("one", 2, new Date(3L));
        CompositeKey differentKey = new CompositeKey(2, "one", new Date(3L));

        Map<CompositeKey, String> m = new HashMap<>();
        m.put(key, "value1");
        m.put(differentKey, "value2");

        Object retrievedValue = m.get(new CompositeKey("one", 2, new Date(3L)));

        printResult("test__multi_put_get", "value1", retrievedValue);
    }

    public static void test__multi_put_size() {
        CompositeKey key = new CompositeKey("one", 2, new Date(3L));
        CompositeKey differentKey = new CompositeKey(2, "one", new Date(3L));

        Map<CompositeKey, String> m = new HashMap<>();
        m.put(key, "value1");
        m.put(differentKey, "value2");

        printResult("test__multi_put_size", 2, m.size());
    }

    private static void printResult(String testName, Object expected, Object actual) {
        System.out.println(testName);
        if (expected.equals(actual)) {
            System.out.println("  :) It worked!");

        } else  {
            System.out.println("  D; It’s broken!");
            System.out.println("  Expected: " + expected);
            System.out.println("  Actual: " + actual);
        }
        System.out.println("");
    }

    public static void main(String... args) {
       test__equals();
        test__put_get();
        test__multi_put_get();
        test__multi_put_size();
    }
}






